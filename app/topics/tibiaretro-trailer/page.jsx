import TibiaretroTrailerKeywordPage, { generateMetadata } from './tibiaretro-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroTrailerKeywordPage />;
}
