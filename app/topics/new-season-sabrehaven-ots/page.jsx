import NewSeasonSabrehavenOtsKeywordPage, { generateMetadata } from './new-season-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenOtsKeywordPage />;
}
