import Sabrehaven15EvoServerKeywordPage, { generateMetadata } from './sabrehaven-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15EvoServerKeywordPage />;
}
