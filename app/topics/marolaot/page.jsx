import MarolaotKeywordPage, { generateMetadata } from './marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotKeywordPage />;
}
