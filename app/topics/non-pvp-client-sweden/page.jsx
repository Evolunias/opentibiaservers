import NonPvpClientSwedenKeywordPage, { generateMetadata } from './non-pvp-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientSwedenKeywordPage />;
}
