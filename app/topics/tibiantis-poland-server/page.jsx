import TibiantisPolandServerKeywordPage, { generateMetadata } from './tibiantis-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisPolandServerKeywordPage />;
}
