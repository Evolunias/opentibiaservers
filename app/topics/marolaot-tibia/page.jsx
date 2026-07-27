import MarolaotTibiaKeywordPage, { generateMetadata } from './marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotTibiaKeywordPage />;
}
