import OtmadnessPolandServersKeywordPage, { generateMetadata } from './otmadness-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessPolandServersKeywordPage />;
}
