import NewSeasonNostaltherOtServerKeywordPage, { generateMetadata } from './new-season-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherOtServerKeywordPage />;
}
