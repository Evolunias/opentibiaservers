import TopMadnessaliveKeywordPage, { generateMetadata } from './top-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMadnessaliveKeywordPage />;
}
