import NewSeasonCoxaotOtKeywordPage, { generateMetadata } from './new-season-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotOtKeywordPage />;
}
