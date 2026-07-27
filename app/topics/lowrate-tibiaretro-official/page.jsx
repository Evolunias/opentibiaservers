import LowrateTibiaretroOfficialKeywordPage, { generateMetadata } from './lowrate-tibiaretro-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroOfficialKeywordPage />;
}
