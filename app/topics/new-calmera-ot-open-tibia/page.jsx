import NewCalmeraOtOpenTibiaKeywordPage, { generateMetadata } from './new-calmera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtOpenTibiaKeywordPage />;
}
