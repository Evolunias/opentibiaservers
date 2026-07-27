import LowrateMediviaWebsiteKeywordPage, { generateMetadata } from './lowrate-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaWebsiteKeywordPage />;
}
