import LowrateMarolaotTibiaKeywordPage, { generateMetadata } from './lowrate-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMarolaotTibiaKeywordPage />;
}
