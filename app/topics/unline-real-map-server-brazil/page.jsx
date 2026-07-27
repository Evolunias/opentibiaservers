import UnlineRealMapServerBrazilKeywordPage, { generateMetadata } from './unline-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineRealMapServerBrazilKeywordPage />;
}
