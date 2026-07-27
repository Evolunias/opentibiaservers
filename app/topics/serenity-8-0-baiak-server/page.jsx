import Serenity80BaiakServerKeywordPage, { generateMetadata } from './serenity-8-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80BaiakServerKeywordPage />;
}
