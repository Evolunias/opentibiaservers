import PopularMediviaGuideKeywordPage, { generateMetadata } from './popular-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaGuideKeywordPage />;
}
