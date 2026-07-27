import LowExpServerMexicoKeywordPage, { generateMetadata } from './low-exp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerMexicoKeywordPage />;
}
