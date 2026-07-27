import PopularYurotsOtServerKeywordPage, { generateMetadata } from './popular-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsOtServerKeywordPage />;
}
