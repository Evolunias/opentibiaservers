import NewSeasonOxygenotOtKeywordPage, { generateMetadata } from './new-season-oxygenot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotOtKeywordPage />;
}
