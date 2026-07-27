import NtoStarPolandServersKeywordPage, { generateMetadata } from './nto-star-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarPolandServersKeywordPage />;
}
