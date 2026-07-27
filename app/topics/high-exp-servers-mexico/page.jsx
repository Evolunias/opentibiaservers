import HighExpServersMexicoKeywordPage, { generateMetadata } from './high-exp-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersMexicoKeywordPage />;
}
