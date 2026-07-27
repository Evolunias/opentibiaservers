import ActiveHarmoniaOtOtKeywordPage, { generateMetadata } from './active-harmonia-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtOtKeywordPage />;
}
