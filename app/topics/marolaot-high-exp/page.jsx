import MarolaotHighExpKeywordPage, { generateMetadata } from './marolaot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotHighExpKeywordPage />;
}
