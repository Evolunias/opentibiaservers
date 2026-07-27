import NewMadnessaliveKeywordPage, { generateMetadata } from './new-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMadnessaliveKeywordPage />;
}
