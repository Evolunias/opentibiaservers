import PopularYurotsOtKeywordPage, { generateMetadata } from './popular-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsOtKeywordPage />;
}
