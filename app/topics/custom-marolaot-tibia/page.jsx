import CustomMarolaotTibiaKeywordPage, { generateMetadata } from './custom-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotTibiaKeywordPage />;
}
