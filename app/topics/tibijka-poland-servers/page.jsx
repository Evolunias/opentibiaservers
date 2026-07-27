import TibijkaPolandServersKeywordPage, { generateMetadata } from './tibijka-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPolandServersKeywordPage />;
}
