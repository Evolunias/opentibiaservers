import RubinotWarsKeywordPage, { generateMetadata } from './rubinot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotWarsKeywordPage />;
}
