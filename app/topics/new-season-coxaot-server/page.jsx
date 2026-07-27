import NewSeasonCoxaotServerKeywordPage, { generateMetadata } from './new-season-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotServerKeywordPage />;
}
