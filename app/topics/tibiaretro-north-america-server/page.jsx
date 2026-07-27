import TibiaretroNorthAmericaServerKeywordPage, { generateMetadata } from './tibiaretro-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroNorthAmericaServerKeywordPage />;
}
