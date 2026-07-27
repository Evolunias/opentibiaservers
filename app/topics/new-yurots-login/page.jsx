import NewYurotsLoginKeywordPage, { generateMetadata } from './new-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsLoginKeywordPage />;
}
