import LowExpOtServerLatinAmericaKeywordPage, { generateMetadata } from './low-exp-ot-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerLatinAmericaKeywordPage />;
}
