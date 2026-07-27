import LowrateEvoluniaPrivateServerKeywordPage, { generateMetadata } from './lowrate-evolunia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaPrivateServerKeywordPage />;
}
