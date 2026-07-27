import HighrateTibiaretroOtsKeywordPage, { generateMetadata } from './highrate-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroOtsKeywordPage />;
}
