import SerenityPvpKeywordPage, { generateMetadata } from './serenity-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPvpKeywordPage />;
}
