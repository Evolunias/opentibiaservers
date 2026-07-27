import PopularZuneraOtGuideKeywordPage, { generateMetadata } from './popular-zunera-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZuneraOtGuideKeywordPage />;
}
