import PopularClassickDrakoriaClientKeywordPage, { generateMetadata } from './popular-classick-drakoria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassickDrakoriaClientKeywordPage />;
}
