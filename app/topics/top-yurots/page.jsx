import TopYurotsKeywordPage, { generateMetadata } from './top-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsKeywordPage />;
}
