import BestClassicusWebsiteKeywordPage, { generateMetadata } from './best-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusWebsiteKeywordPage />;
}
