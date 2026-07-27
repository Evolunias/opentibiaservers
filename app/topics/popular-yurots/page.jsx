import PopularYurotsKeywordPage, { generateMetadata } from './popular-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsKeywordPage />;
}
