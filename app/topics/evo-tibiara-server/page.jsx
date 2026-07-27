import EvoTibiaraServerKeywordPage, { generateMetadata } from './evo-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaraServerKeywordPage />;
}
