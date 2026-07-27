import FreshStartHarmoniaOtTibiaKeywordPage, { generateMetadata } from './fresh-start-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartHarmoniaOtTibiaKeywordPage />;
}
