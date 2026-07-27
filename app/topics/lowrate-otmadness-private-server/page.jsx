import LowrateOtmadnessPrivateServerKeywordPage, { generateMetadata } from './lowrate-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessPrivateServerKeywordPage />;
}
