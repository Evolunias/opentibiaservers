import ActiveInfernalOtClientKeywordPage, { generateMetadata } from './active-infernal-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtClientKeywordPage />;
}
