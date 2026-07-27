import NewSeasonXanteriaOtServerKeywordPage, { generateMetadata } from './new-season-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaOtServerKeywordPage />;
}
