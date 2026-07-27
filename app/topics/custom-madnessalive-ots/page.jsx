import CustomMadnessaliveOtsKeywordPage, { generateMetadata } from './custom-madnessalive-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveOtsKeywordPage />;
}
