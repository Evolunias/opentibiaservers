import LowExpOtmadnessServerKeywordPage, { generateMetadata } from './low-exp-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtmadnessServerKeywordPage />;
}
