import TibiaretroGermanyServersKeywordPage, { generateMetadata } from './tibiaretro-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroGermanyServersKeywordPage />;
}
