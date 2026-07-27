import OxygenotRealMapServerBrazilKeywordPage, { generateMetadata } from './oxygenot-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRealMapServerBrazilKeywordPage />;
}
