import LowExpClientArgentinaKeywordPage, { generateMetadata } from './low-exp-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientArgentinaKeywordPage />;
}
