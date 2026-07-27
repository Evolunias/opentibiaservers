import PopularClassickDrakoriaServerKeywordPage, { generateMetadata } from './popular-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassickDrakoriaServerKeywordPage />;
}
