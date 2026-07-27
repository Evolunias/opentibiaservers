import CustomOtmadnessPrivateServerKeywordPage, { generateMetadata } from './custom-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessPrivateServerKeywordPage />;
}
