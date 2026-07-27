import TibiaretroCanadaServerKeywordPage, { generateMetadata } from './tibiaretro-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroCanadaServerKeywordPage />;
}
