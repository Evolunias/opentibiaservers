import NewSeasonNostaltherOtsKeywordPage, { generateMetadata } from './new-season-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherOtsKeywordPage />;
}
