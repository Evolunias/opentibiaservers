import HighrateThorniaOtsKeywordPage, { generateMetadata } from './highrate-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaOtsKeywordPage />;
}
