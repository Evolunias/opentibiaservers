import Serenity12BaiakServerKeywordPage, { generateMetadata } from './serenity-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12BaiakServerKeywordPage />;
}
