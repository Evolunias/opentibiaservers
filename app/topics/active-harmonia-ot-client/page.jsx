import ActiveHarmoniaOtClientKeywordPage, { generateMetadata } from './active-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtClientKeywordPage />;
}
