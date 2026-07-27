import EvoTibiaPrivateServerSwedenKeywordPage, { generateMetadata } from './evo-tibia-private-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaPrivateServerSwedenKeywordPage />;
}
