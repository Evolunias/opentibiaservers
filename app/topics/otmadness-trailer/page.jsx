import OtmadnessTrailerKeywordPage, { generateMetadata } from './otmadness-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessTrailerKeywordPage />;
}
