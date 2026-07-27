import WithActivePlayersGuideCanadaKeywordPage, { generateMetadata } from './with-active-players-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersGuideCanadaKeywordPage />;
}
