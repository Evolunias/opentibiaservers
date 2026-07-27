import NewSeasonXanteriaClientKeywordPage, { generateMetadata } from './new-season-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaClientKeywordPage />;
}
