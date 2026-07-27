import TibiaretroUsaServerKeywordPage, { generateMetadata } from './tibiaretro-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroUsaServerKeywordPage />;
}
