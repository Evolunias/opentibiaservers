import NewSeasonSerenityOtServerKeywordPage, { generateMetadata } from './new-season-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityOtServerKeywordPage />;
}
