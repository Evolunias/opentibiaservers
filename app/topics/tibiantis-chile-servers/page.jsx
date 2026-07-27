import TibiantisChileServersKeywordPage, { generateMetadata } from './tibiantis-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisChileServersKeywordPage />;
}
