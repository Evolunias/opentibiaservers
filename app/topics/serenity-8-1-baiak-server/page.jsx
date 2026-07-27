import Serenity81BaiakServerKeywordPage, { generateMetadata } from './serenity-8-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81BaiakServerKeywordPage />;
}
