import Sabrehaven11EvoServerKeywordPage, { generateMetadata } from './sabrehaven-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11EvoServerKeywordPage />;
}
