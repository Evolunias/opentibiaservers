import KasteriaFunServerKeywordPage, { generateMetadata } from './kasteria-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaFunServerKeywordPage />;
}
