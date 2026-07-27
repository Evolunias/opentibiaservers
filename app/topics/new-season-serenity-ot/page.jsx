import NewSeasonSerenityOtKeywordPage, { generateMetadata } from './new-season-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityOtKeywordPage />;
}
