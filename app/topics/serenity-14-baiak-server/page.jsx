import Serenity14BaiakServerKeywordPage, { generateMetadata } from './serenity-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14BaiakServerKeywordPage />;
}
