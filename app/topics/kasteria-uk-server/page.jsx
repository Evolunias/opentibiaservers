import KasteriaUkServerKeywordPage, { generateMetadata } from './kasteria-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaUkServerKeywordPage />;
}
