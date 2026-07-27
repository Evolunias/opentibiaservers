import NewSeasonEvoleraOtServerKeywordPage, { generateMetadata } from './new-season-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraOtServerKeywordPage />;
}
