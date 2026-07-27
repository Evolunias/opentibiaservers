import NewSeasonImperianicOtKeywordPage, { generateMetadata } from './new-season-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicOtKeywordPage />;
}
