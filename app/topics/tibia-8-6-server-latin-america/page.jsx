import Tibia86ServerLatinAmericaKeywordPage, { generateMetadata } from './tibia-8-6-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerLatinAmericaKeywordPage />;
}
