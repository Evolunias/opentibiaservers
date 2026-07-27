import AlasteraSeasonKeywordPage, { generateMetadata } from './alastera-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraSeasonKeywordPage />;
}
