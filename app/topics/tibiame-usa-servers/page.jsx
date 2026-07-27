import TibiameUsaServersKeywordPage, { generateMetadata } from './tibiame-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameUsaServersKeywordPage />;
}
