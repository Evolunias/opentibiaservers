import NewMediviaWebsiteKeywordPage, { generateMetadata } from './new-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaWebsiteKeywordPage />;
}
