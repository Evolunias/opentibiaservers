import NewSeasonNostaltherOtKeywordPage, { generateMetadata } from './new-season-nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherOtKeywordPage />;
}
