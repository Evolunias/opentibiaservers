import RealMapOtmadnessRegisterKeywordPage, { generateMetadata } from './real-map-otmadness-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessRegisterKeywordPage />;
}
