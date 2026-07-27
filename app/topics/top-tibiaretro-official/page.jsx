import TopTibiaretroOfficialKeywordPage, { generateMetadata } from './top-tibiaretro-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroOfficialKeywordPage />;
}
