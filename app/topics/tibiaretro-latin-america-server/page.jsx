import TibiaretroLatinAmericaServerKeywordPage, { generateMetadata } from './tibiaretro-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroLatinAmericaServerKeywordPage />;
}
