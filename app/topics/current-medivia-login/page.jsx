import CurrentMediviaLoginKeywordPage, { generateMetadata } from './current-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaLoginKeywordPage />;
}
