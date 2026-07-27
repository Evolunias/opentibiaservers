import NonPvpOtServerUkKeywordPage, { generateMetadata } from './non-pvp-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerUkKeywordPage />;
}
