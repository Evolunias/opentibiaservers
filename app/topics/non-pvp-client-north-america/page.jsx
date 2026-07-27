import NonPvpClientNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientNorthAmericaKeywordPage />;
}
