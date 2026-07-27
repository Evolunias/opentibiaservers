import TibiaretroPolandServerKeywordPage, { generateMetadata } from './tibiaretro-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroPolandServerKeywordPage />;
}
