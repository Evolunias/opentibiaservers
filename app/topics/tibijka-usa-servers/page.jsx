import TibijkaUsaServersKeywordPage, { generateMetadata } from './tibijka-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaUsaServersKeywordPage />;
}
