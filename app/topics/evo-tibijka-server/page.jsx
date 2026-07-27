import EvoTibijkaServerKeywordPage, { generateMetadata } from './evo-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibijkaServerKeywordPage />;
}
