import LowrateTibiaretroOtKeywordPage, { generateMetadata } from './lowrate-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroOtKeywordPage />;
}
