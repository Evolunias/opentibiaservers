import ActiveArcaniarlWebsiteKeywordPage, { generateMetadata } from './active-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlWebsiteKeywordPage />;
}
