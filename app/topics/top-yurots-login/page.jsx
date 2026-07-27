import TopYurotsLoginKeywordPage, { generateMetadata } from './top-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsLoginKeywordPage />;
}
