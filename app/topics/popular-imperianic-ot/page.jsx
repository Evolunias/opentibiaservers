import PopularImperianicOtKeywordPage, { generateMetadata } from './popular-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicOtKeywordPage />;
}
