import ActiveZuneraOtWebsiteKeywordPage, { generateMetadata } from './active-zunera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZuneraOtWebsiteKeywordPage />;
}
