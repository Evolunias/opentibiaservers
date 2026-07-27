import NonPvpOtServerEuropeKeywordPage, { generateMetadata } from './non-pvp-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerEuropeKeywordPage />;
}
