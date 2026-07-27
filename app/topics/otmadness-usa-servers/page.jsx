import OtmadnessUsaServersKeywordPage, { generateMetadata } from './otmadness-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessUsaServersKeywordPage />;
}
