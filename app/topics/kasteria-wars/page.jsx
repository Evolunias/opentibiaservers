import KasteriaWarsKeywordPage, { generateMetadata } from './kasteria-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaWarsKeywordPage />;
}
