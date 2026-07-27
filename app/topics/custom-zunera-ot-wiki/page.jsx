import CustomZuneraOtWikiKeywordPage, { generateMetadata } from './custom-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtWikiKeywordPage />;
}
