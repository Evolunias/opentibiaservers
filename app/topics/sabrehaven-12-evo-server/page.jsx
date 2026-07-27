import Sabrehaven12EvoServerKeywordPage, { generateMetadata } from './sabrehaven-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12EvoServerKeywordPage />;
}
