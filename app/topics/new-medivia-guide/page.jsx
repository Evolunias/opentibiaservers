import NewMediviaGuideKeywordPage, { generateMetadata } from './new-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaGuideKeywordPage />;
}
