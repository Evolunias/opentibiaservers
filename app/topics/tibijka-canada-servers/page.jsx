import TibijkaCanadaServersKeywordPage, { generateMetadata } from './tibijka-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaCanadaServersKeywordPage />;
}
