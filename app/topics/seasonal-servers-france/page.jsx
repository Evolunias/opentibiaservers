import SeasonalServersFranceKeywordPage, { generateMetadata } from './seasonal-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersFranceKeywordPage />;
}
