import WithActivePlayersGuideSwedenKeywordPage, { generateMetadata } from './with-active-players-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersGuideSwedenKeywordPage />;
}
