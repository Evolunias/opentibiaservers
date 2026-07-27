import OfficialTibiascapeLoginKeywordPage, { generateMetadata } from './official-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeLoginKeywordPage />;
}
