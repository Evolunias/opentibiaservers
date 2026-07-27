import NewSeasonNilotOtsKeywordPage, { generateMetadata } from './new-season-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotOtsKeywordPage />;
}
