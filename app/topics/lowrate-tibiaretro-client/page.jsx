import LowrateTibiaretroClientKeywordPage, { generateMetadata } from './lowrate-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroClientKeywordPage />;
}
