import TibiaretroSwedenServersKeywordPage, { generateMetadata } from './tibiaretro-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroSwedenServersKeywordPage />;
}
