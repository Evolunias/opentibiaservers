import PopularImperianicGuideKeywordPage, { generateMetadata } from './popular-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicGuideKeywordPage />;
}
