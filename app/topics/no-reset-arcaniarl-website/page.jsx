import NoResetArcaniarlWebsiteKeywordPage, { generateMetadata } from './no-reset-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlWebsiteKeywordPage />;
}
