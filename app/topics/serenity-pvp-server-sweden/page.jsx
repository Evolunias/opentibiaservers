import SerenityPvpServerSwedenKeywordPage, { generateMetadata } from './serenity-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPvpServerSwedenKeywordPage />;
}
