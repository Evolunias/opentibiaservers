import PopularTibiaraOtKeywordPage, { generateMetadata } from './popular-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraOtKeywordPage />;
}
