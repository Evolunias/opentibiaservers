import Saintsot11EvoServerKeywordPage, { generateMetadata } from './saintsot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11EvoServerKeywordPage />;
}
