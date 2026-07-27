import NewSeasonSabrehavenOtServerKeywordPage, { generateMetadata } from './new-season-sabrehaven-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenOtServerKeywordPage />;
}
