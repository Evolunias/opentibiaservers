import HighrateEvoluniaPrivateServerKeywordPage, { generateMetadata } from './highrate-evolunia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaPrivateServerKeywordPage />;
}
