import CurrentMediviaOtKeywordPage, { generateMetadata } from './current-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaOtKeywordPage />;
}
