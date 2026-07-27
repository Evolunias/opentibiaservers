import SeasonalOpenTibiaServerFranceKeywordPage, { generateMetadata } from './seasonal-open-tibia-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOpenTibiaServerFranceKeywordPage />;
}
