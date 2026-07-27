import NonPvpSabrehavenServerKeywordPage, { generateMetadata } from './non-pvp-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSabrehavenServerKeywordPage />;
}
