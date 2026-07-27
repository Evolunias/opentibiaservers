import Serenity100BaiakServerKeywordPage, { generateMetadata } from './serenity-10-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity100BaiakServerKeywordPage />;
}
