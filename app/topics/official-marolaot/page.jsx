import OfficialMarolaotKeywordPage, { generateMetadata } from './official-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotKeywordPage />;
}
