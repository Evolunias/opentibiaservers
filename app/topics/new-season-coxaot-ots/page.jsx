import NewSeasonCoxaotOtsKeywordPage, { generateMetadata } from './new-season-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotOtsKeywordPage />;
}
