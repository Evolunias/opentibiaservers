import CustomMadnessaliveOtServerKeywordPage, { generateMetadata } from './custom-madnessalive-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveOtServerKeywordPage />;
}
