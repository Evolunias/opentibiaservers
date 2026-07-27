import PopularZuneraOtKeywordPage, { generateMetadata } from './popular-zunera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZuneraOtKeywordPage />;
}
