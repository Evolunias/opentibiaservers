import NewSeasonNostaltherLoginKeywordPage, { generateMetadata } from './new-season-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherLoginKeywordPage />;
}
