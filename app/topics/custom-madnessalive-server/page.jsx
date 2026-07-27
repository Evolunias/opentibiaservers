import CustomMadnessaliveServerKeywordPage, { generateMetadata } from './custom-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveServerKeywordPage />;
}
