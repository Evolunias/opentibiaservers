import TibianusSouthAmericaServersKeywordPage, { generateMetadata } from './tibianus-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusSouthAmericaServersKeywordPage />;
}
