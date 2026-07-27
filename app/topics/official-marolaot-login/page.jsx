import OfficialMarolaotLoginKeywordPage, { generateMetadata } from './official-marolaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotLoginKeywordPage />;
}
