import CurrentMediviaServerKeywordPage, { generateMetadata } from './current-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaServerKeywordPage />;
}
