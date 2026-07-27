import NewNepreniaGuideKeywordPage, { generateMetadata } from './new-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaGuideKeywordPage />;
}
