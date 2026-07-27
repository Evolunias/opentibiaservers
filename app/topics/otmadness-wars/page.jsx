import OtmadnessWarsKeywordPage, { generateMetadata } from './otmadness-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessWarsKeywordPage />;
}
