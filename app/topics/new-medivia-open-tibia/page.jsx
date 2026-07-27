import NewMediviaOpenTibiaKeywordPage, { generateMetadata } from './new-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaOpenTibiaKeywordPage />;
}
