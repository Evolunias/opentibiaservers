import CustomMadnessaliveKeywordPage, { generateMetadata } from './custom-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveKeywordPage />;
}
