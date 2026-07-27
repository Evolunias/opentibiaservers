import PopularYurotsServerKeywordPage, { generateMetadata } from './popular-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsServerKeywordPage />;
}
