import TibiantisGermanyServersKeywordPage, { generateMetadata } from './tibiantis-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisGermanyServersKeywordPage />;
}
