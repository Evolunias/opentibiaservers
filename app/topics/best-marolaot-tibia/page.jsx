import BestMarolaotTibiaKeywordPage, { generateMetadata } from './best-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMarolaotTibiaKeywordPage />;
}
