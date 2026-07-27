import Sabrehaven13EvoServerKeywordPage, { generateMetadata } from './sabrehaven-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13EvoServerKeywordPage />;
}
