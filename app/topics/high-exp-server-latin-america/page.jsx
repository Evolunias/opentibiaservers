import HighExpServerLatinAmericaKeywordPage, { generateMetadata } from './high-exp-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerLatinAmericaKeywordPage />;
}
