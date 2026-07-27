import NewYurotsClientKeywordPage, { generateMetadata } from './new-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsClientKeywordPage />;
}
