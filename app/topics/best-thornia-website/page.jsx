import BestThorniaWebsiteKeywordPage, { generateMetadata } from './best-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaWebsiteKeywordPage />;
}
