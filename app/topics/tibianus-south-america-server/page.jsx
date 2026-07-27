import TibianusSouthAmericaServerKeywordPage, { generateMetadata } from './tibianus-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusSouthAmericaServerKeywordPage />;
}
