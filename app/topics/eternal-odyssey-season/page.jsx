import EternalOdysseySeasonKeywordPage, { generateMetadata } from './eternal-odyssey-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseySeasonKeywordPage />;
}
