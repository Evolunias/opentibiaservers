import NewCalmeraOtTibiaKeywordPage, { generateMetadata } from './new-calmera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtTibiaKeywordPage />;
}
