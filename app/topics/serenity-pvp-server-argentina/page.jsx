import SerenityPvpServerArgentinaKeywordPage, { generateMetadata } from './serenity-pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPvpServerArgentinaKeywordPage />;
}
