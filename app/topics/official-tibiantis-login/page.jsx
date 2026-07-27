import OfficialTibiantisLoginKeywordPage, { generateMetadata } from './official-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisLoginKeywordPage />;
}
