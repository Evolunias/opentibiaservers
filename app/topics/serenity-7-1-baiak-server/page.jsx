import Serenity71BaiakServerKeywordPage, { generateMetadata } from './serenity-7-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71BaiakServerKeywordPage />;
}
