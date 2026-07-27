import EvoTibijkaServersKeywordPage, { generateMetadata } from './evo-tibijka-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibijkaServersKeywordPage />;
}
