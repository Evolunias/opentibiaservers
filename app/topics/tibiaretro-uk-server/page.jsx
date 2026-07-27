import TibiaretroUkServerKeywordPage, { generateMetadata } from './tibiaretro-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroUkServerKeywordPage />;
}
