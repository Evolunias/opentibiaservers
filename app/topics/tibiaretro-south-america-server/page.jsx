import TibiaretroSouthAmericaServerKeywordPage, { generateMetadata } from './tibiaretro-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroSouthAmericaServerKeywordPage />;
}
