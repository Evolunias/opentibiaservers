import NewYurotsOtKeywordPage, { generateMetadata } from './new-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsOtKeywordPage />;
}
