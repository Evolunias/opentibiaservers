import NtoStarGermanyServersKeywordPage, { generateMetadata } from './nto-star-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarGermanyServersKeywordPage />;
}
