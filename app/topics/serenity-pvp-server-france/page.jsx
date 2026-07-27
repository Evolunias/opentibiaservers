import SerenityPvpServerFranceKeywordPage, { generateMetadata } from './serenity-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPvpServerFranceKeywordPage />;
}
