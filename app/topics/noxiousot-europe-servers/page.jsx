import NoxiousotEuropeServersKeywordPage, { generateMetadata } from './noxiousot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotEuropeServersKeywordPage />;
}
