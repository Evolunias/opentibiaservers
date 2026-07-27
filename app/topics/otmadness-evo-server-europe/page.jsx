import OtmadnessEvoServerEuropeKeywordPage, { generateMetadata } from './otmadness-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessEvoServerEuropeKeywordPage />;
}
