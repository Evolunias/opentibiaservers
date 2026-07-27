import TopYurotsServerKeywordPage, { generateMetadata } from './top-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsServerKeywordPage />;
}
