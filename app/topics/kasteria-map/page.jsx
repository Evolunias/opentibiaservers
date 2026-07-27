import KasteriaMapKeywordPage, { generateMetadata } from './kasteria-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaMapKeywordPage />;
}
