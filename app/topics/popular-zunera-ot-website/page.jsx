import PopularZuneraOtWebsiteKeywordPage, { generateMetadata } from './popular-zunera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZuneraOtWebsiteKeywordPage />;
}
