import Serenity11BaiakServerKeywordPage, { generateMetadata } from './serenity-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11BaiakServerKeywordPage />;
}
