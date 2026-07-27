import NewRubinotLoginKeywordPage, { generateMetadata } from './new-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotLoginKeywordPage />;
}
