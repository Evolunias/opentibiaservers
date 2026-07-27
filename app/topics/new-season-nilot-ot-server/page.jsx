import NewSeasonNilotOtServerKeywordPage, { generateMetadata } from './new-season-nilot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotOtServerKeywordPage />;
}
