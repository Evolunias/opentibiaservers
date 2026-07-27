import SeasonalStatusFranceKeywordPage, { generateMetadata } from './seasonal-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalStatusFranceKeywordPage />;
}
