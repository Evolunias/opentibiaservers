import NewSeasonXanteriaOtsKeywordPage, { generateMetadata } from './new-season-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaOtsKeywordPage />;
}
