import FreshStartMediviaOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaOpenTibiaKeywordPage />;
}
