import EvoTibiaPrivateServerUkKeywordPage, { generateMetadata } from './evo-tibia-private-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaPrivateServerUkKeywordPage />;
}
