import TibijkaGermanyServersKeywordPage, { generateMetadata } from './tibijka-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaGermanyServersKeywordPage />;
}
