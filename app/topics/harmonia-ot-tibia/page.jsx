import HarmoniaOtTibiaKeywordPage, { generateMetadata } from './harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtTibiaKeywordPage />;
}
