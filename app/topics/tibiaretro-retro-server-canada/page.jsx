import TibiaretroRetroServerCanadaKeywordPage, { generateMetadata } from './tibiaretro-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroRetroServerCanadaKeywordPage />;
}
