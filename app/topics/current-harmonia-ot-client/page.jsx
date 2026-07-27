import CurrentHarmoniaOtClientKeywordPage, { generateMetadata } from './current-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtClientKeywordPage />;
}
