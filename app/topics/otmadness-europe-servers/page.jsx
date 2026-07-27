import OtmadnessEuropeServersKeywordPage, { generateMetadata } from './otmadness-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessEuropeServersKeywordPage />;
}
