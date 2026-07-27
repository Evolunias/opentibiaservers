import NonPvpClientEuropeKeywordPage, { generateMetadata } from './non-pvp-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientEuropeKeywordPage />;
}
