import NewSeasonTibijkaLoginKeywordPage, { generateMetadata } from './new-season-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaLoginKeywordPage />;
}
