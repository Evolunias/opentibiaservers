import TibijkaChileServersKeywordPage, { generateMetadata } from './tibijka-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaChileServersKeywordPage />;
}
