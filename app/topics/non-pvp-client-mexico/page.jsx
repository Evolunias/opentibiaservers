import NonPvpClientMexicoKeywordPage, { generateMetadata } from './non-pvp-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientMexicoKeywordPage />;
}
