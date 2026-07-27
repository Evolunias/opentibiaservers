import OtservlistSeasonKeywordPage, { generateMetadata } from './otservlist-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistSeasonKeywordPage />;
}
