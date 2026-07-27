import RookgaardTalesNorthAmericaServerKeywordPage, { generateMetadata } from './rookgaard-tales-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesNorthAmericaServerKeywordPage />;
}
