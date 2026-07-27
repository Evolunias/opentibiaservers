import OtmadnessCanadaServersKeywordPage, { generateMetadata } from './otmadness-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessCanadaServersKeywordPage />;
}
