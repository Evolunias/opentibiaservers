import LowrateInfernalOtClientKeywordPage, { generateMetadata } from './lowrate-infernal-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateInfernalOtClientKeywordPage />;
}
