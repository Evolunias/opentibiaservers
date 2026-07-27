import NewSeasonNilotKeywordPage, { generateMetadata } from './new-season-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotKeywordPage />;
}
