import KasteriaLowExpServerSwedenKeywordPage, { generateMetadata } from './kasteria-low-exp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaLowExpServerSwedenKeywordPage />;
}
