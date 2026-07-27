import NtoStarNorthAmericaServerKeywordPage, { generateMetadata } from './nto-star-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarNorthAmericaServerKeywordPage />;
}
