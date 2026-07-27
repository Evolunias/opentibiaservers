import NewSeasonEvoleraOtKeywordPage, { generateMetadata } from './new-season-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraOtKeywordPage />;
}
