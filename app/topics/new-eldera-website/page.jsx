import NewElderaWebsiteKeywordPage, { generateMetadata } from './new-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaWebsiteKeywordPage />;
}
