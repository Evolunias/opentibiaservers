import NewSeasonNilotClientKeywordPage, { generateMetadata } from './new-season-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotClientKeywordPage />;
}
