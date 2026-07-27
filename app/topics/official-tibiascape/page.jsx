import OfficialTibiascapeKeywordPage, { generateMetadata } from './official-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeKeywordPage />;
}
