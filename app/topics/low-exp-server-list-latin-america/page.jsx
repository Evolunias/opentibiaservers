import LowExpServerListLatinAmericaKeywordPage, { generateMetadata } from './low-exp-server-list-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListLatinAmericaKeywordPage />;
}
