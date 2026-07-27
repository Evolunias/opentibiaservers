import TibiaretroPolandServersKeywordPage, { generateMetadata } from './tibiaretro-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroPolandServersKeywordPage />;
}
