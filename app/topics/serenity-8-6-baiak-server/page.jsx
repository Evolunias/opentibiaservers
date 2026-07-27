import Serenity86BaiakServerKeywordPage, { generateMetadata } from './serenity-8-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86BaiakServerKeywordPage />;
}
