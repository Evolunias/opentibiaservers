import PopularTibiaretroOfficialKeywordPage, { generateMetadata } from './popular-tibiaretro-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroOfficialKeywordPage />;
}
