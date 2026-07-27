import TibiantisUsaServersKeywordPage, { generateMetadata } from './tibiantis-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisUsaServersKeywordPage />;
}
