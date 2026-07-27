import PopularClassickDrakoriaOtKeywordPage, { generateMetadata } from './popular-classick-drakoria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassickDrakoriaOtKeywordPage />;
}
