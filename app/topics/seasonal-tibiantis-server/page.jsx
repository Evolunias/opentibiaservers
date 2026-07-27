import SeasonalTibiantisServerKeywordPage, { generateMetadata } from './seasonal-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalTibiantisServerKeywordPage />;
}
