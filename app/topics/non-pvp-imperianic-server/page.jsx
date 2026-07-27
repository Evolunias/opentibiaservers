import NonPvpImperianicServerKeywordPage, { generateMetadata } from './non-pvp-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpImperianicServerKeywordPage />;
}
