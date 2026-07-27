import NewImperianicOtServerKeywordPage, { generateMetadata } from './new-imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicOtServerKeywordPage />;
}
