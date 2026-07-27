import ActiveTibiaretroPrivateServerKeywordPage, { generateMetadata } from './active-tibiaretro-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroPrivateServerKeywordPage />;
}
