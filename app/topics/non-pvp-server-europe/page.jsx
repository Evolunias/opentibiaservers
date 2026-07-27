import NonPvpServerEuropeKeywordPage, { generateMetadata } from './non-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerEuropeKeywordPage />;
}
