import NewSeasonNostaltherGuideKeywordPage, { generateMetadata } from './new-season-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherGuideKeywordPage />;
}
