import NewSeasonXanteriaOtKeywordPage, { generateMetadata } from './new-season-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaOtKeywordPage />;
}
