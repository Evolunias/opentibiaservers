import LowExpOtServerMexicoKeywordPage, { generateMetadata } from './low-exp-ot-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerMexicoKeywordPage />;
}
