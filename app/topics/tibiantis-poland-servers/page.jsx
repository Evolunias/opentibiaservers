import TibiantisPolandServersKeywordPage, { generateMetadata } from './tibiantis-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisPolandServersKeywordPage />;
}
