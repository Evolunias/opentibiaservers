import TibiameUsaServerKeywordPage, { generateMetadata } from './tibiame-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameUsaServerKeywordPage />;
}
