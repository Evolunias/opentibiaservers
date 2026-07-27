import WithActivePlayersGuideUsaKeywordPage, { generateMetadata } from './with-active-players-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersGuideUsaKeywordPage />;
}
