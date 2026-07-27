import SeasonalEternalOdysseyServerKeywordPage, { generateMetadata } from './seasonal-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalEternalOdysseyServerKeywordPage />;
}
