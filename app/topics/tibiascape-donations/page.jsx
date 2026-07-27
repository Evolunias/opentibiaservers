import TibiascapeDonationsKeywordPage, { generateMetadata } from './tibiascape-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeDonationsKeywordPage />;
}
