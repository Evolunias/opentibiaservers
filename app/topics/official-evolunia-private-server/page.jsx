import OfficialEvoluniaPrivateServerKeywordPage, { generateMetadata } from './official-evolunia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaPrivateServerKeywordPage />;
}
