import BestSerenityWebsiteKeywordPage, { generateMetadata } from './best-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityWebsiteKeywordPage />;
}
