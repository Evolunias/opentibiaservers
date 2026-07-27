import LowExpServersLatinAmericaKeywordPage, { generateMetadata } from './low-exp-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersLatinAmericaKeywordPage />;
}
