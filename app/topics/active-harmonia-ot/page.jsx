import ActiveHarmoniaOtKeywordPage, { generateMetadata } from './active-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtKeywordPage />;
}
