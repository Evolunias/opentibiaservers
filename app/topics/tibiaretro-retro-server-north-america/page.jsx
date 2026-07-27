import TibiaretroRetroServerNorthAmericaKeywordPage, { generateMetadata } from './tibiaretro-retro-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroRetroServerNorthAmericaKeywordPage />;
}
