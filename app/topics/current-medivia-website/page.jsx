import CurrentMediviaWebsiteKeywordPage, { generateMetadata } from './current-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaWebsiteKeywordPage />;
}
