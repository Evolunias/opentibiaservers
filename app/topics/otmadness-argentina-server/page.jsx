import OtmadnessArgentinaServerKeywordPage, { generateMetadata } from './otmadness-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessArgentinaServerKeywordPage />;
}
