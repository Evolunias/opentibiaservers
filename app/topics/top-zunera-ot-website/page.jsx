import TopZuneraOtWebsiteKeywordPage, { generateMetadata } from './top-zunera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtWebsiteKeywordPage />;
}
