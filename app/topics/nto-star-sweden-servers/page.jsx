import NtoStarSwedenServersKeywordPage, { generateMetadata } from './nto-star-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSwedenServersKeywordPage />;
}
