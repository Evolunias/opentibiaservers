import OtmadnessChileServersKeywordPage, { generateMetadata } from './otmadness-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessChileServersKeywordPage />;
}
