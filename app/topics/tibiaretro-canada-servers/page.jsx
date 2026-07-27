import TibiaretroCanadaServersKeywordPage, { generateMetadata } from './tibiaretro-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroCanadaServersKeywordPage />;
}
