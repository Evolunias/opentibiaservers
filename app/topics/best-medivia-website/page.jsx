import BestMediviaWebsiteKeywordPage, { generateMetadata } from './best-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaWebsiteKeywordPage />;
}
