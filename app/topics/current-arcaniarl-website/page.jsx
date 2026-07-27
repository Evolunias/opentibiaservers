import CurrentArcaniarlWebsiteKeywordPage, { generateMetadata } from './current-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlWebsiteKeywordPage />;
}
