import NewSeasonSabrehavenOtKeywordPage, { generateMetadata } from './new-season-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenOtKeywordPage />;
}
