import PopularTibijkaOtServerKeywordPage, { generateMetadata } from './popular-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaOtServerKeywordPage />;
}
