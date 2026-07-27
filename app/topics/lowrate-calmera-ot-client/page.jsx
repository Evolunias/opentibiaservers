import LowrateCalmeraOtClientKeywordPage, { generateMetadata } from './lowrate-calmera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCalmeraOtClientKeywordPage />;
}
