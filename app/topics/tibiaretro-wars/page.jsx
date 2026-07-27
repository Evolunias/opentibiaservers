import TibiaretroWarsKeywordPage, { generateMetadata } from './tibiaretro-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroWarsKeywordPage />;
}
