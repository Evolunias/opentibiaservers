import PopularArchlightOtKeywordPage, { generateMetadata } from './popular-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightOtKeywordPage />;
}
