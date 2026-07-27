import HighrateTibiaretroClientKeywordPage, { generateMetadata } from './highrate-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroClientKeywordPage />;
}
