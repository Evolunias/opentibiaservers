import ActiveTibiascapeWebsiteKeywordPage, { generateMetadata } from './active-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeWebsiteKeywordPage />;
}
