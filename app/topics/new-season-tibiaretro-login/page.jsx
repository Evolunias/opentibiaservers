import NewSeasonTibiaretroLoginKeywordPage, { generateMetadata } from './new-season-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroLoginKeywordPage />;
}
