import AureraGlobalEuropeServersKeywordPage, { generateMetadata } from './aurera-global-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalEuropeServersKeywordPage />;
}
