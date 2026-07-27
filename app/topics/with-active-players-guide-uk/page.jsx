import WithActivePlayersGuideUkKeywordPage, { generateMetadata } from './with-active-players-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersGuideUkKeywordPage />;
}
