import LowrateZuneraOtClientKeywordPage, { generateMetadata } from './lowrate-zunera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZuneraOtClientKeywordPage />;
}
