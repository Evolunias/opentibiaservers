import CyntaraBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './cyntara-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraBaiakServerLatinAmericaKeywordPage />;
}
