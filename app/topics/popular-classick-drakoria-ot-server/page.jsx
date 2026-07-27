import PopularClassickDrakoriaOtServerKeywordPage, { generateMetadata } from './popular-classick-drakoria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassickDrakoriaOtServerKeywordPage />;
}
