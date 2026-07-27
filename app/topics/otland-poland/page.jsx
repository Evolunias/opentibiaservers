import OtlandPolandKeywordPage, { generateMetadata } from './otland-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandPolandKeywordPage />;
}
