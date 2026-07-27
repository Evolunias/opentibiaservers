import NewSeasonSerenityOtsKeywordPage, { generateMetadata } from './new-season-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityOtsKeywordPage />;
}
