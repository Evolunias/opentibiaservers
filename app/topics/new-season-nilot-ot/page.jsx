import NewSeasonNilotOtKeywordPage, { generateMetadata } from './new-season-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotOtKeywordPage />;
}
