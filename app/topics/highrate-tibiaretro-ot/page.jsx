import HighrateTibiaretroOtKeywordPage, { generateMetadata } from './highrate-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroOtKeywordPage />;
}
