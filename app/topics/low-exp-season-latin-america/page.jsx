import LowExpSeasonLatinAmericaKeywordPage, { generateMetadata } from './low-exp-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonLatinAmericaKeywordPage />;
}
