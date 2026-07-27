import HighrateTibiaretroKeywordPage, { generateMetadata } from './highrate-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroKeywordPage />;
}
