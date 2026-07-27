import TibijkaArgentinaServersKeywordPage, { generateMetadata } from './tibijka-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaArgentinaServersKeywordPage />;
}
