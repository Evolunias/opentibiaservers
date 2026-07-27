import NewOxygenotOtServerKeywordPage, { generateMetadata } from './new-oxygenot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotOtServerKeywordPage />;
}
