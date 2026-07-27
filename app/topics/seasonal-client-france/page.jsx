import SeasonalClientFranceKeywordPage, { generateMetadata } from './seasonal-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientFranceKeywordPage />;
}
