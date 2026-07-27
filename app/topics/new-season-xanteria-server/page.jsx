import NewSeasonXanteriaServerKeywordPage, { generateMetadata } from './new-season-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaServerKeywordPage />;
}
