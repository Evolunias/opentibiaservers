import NewRubinotKeywordPage, { generateMetadata } from './new-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotKeywordPage />;
}
