import NewSeasonCoxaotOtServerKeywordPage, { generateMetadata } from './new-season-coxaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotOtServerKeywordPage />;
}
