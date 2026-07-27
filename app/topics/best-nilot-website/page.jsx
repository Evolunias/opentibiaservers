import BestNilotWebsiteKeywordPage, { generateMetadata } from './best-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotWebsiteKeywordPage />;
}
