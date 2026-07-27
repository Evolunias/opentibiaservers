import SerenitySeasonalServerFranceKeywordPage, { generateMetadata } from './serenity-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenitySeasonalServerFranceKeywordPage />;
}
