import TopHarmoniaOtTibiaKeywordPage, { generateMetadata } from './top-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtTibiaKeywordPage />;
}
