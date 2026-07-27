import SerenityBaiakServerSwedenKeywordPage, { generateMetadata } from './serenity-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityBaiakServerSwedenKeywordPage />;
}
