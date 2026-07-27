import CurrentElderaWebsiteKeywordPage, { generateMetadata } from './current-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaWebsiteKeywordPage />;
}
