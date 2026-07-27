import NewYurotsKeywordPage, { generateMetadata } from './new-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsKeywordPage />;
}
