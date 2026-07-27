import CoxaotRealMapServerNorthAmericaKeywordPage, { generateMetadata } from './coxaot-real-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotRealMapServerNorthAmericaKeywordPage />;
}
