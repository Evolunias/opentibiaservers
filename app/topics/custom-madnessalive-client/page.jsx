import CustomMadnessaliveClientKeywordPage, { generateMetadata } from './custom-madnessalive-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveClientKeywordPage />;
}
