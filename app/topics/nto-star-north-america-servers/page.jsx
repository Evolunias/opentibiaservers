import NtoStarNorthAmericaServersKeywordPage, { generateMetadata } from './nto-star-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarNorthAmericaServersKeywordPage />;
}
