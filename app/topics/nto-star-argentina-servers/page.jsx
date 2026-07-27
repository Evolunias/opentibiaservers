import NtoStarArgentinaServersKeywordPage, { generateMetadata } from './nto-star-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarArgentinaServersKeywordPage />;
}
