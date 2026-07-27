import AmeriaSeasonKeywordPage, { generateMetadata } from './ameria-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonKeywordPage />;
}
