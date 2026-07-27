import KasteriaStatusKeywordPage, { generateMetadata } from './kasteria-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaStatusKeywordPage />;
}
