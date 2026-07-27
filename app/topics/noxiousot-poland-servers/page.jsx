import NoxiousotPolandServersKeywordPage, { generateMetadata } from './noxiousot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotPolandServersKeywordPage />;
}
