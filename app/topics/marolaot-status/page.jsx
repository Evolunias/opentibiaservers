import MarolaotStatusKeywordPage, { generateMetadata } from './marolaot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotStatusKeywordPage />;
}
