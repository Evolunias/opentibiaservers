import CurrentMediviaClientKeywordPage, { generateMetadata } from './current-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaClientKeywordPage />;
}
