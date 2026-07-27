import NewYurotsOtServerKeywordPage, { generateMetadata } from './new-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsOtServerKeywordPage />;
}
