import LowrateThorniaPrivateServerKeywordPage, { generateMetadata } from './lowrate-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaPrivateServerKeywordPage />;
}
