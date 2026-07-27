import LowExpClientMexicoKeywordPage, { generateMetadata } from './low-exp-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientMexicoKeywordPage />;
}
