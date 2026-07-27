import NewYurotsServerKeywordPage, { generateMetadata } from './new-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsServerKeywordPage />;
}
