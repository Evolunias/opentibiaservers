import NewTibiaretroOfficialKeywordPage, { generateMetadata } from './new-tibiaretro-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroOfficialKeywordPage />;
}
