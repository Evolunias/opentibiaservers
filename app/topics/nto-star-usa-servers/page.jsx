import NtoStarUsaServersKeywordPage, { generateMetadata } from './nto-star-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarUsaServersKeywordPage />;
}
