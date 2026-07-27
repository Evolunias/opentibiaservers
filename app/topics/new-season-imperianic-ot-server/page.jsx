import NewSeasonImperianicOtServerKeywordPage, { generateMetadata } from './new-season-imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicOtServerKeywordPage />;
}
