import CurrentMarolaotTibiaKeywordPage, { generateMetadata } from './current-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotTibiaKeywordPage />;
}
