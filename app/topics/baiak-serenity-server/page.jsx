import BaiakSerenityServerKeywordPage, { generateMetadata } from './baiak-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSerenityServerKeywordPage />;
}
