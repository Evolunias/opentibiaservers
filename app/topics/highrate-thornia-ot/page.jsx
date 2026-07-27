import HighrateThorniaOtKeywordPage, { generateMetadata } from './highrate-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaOtKeywordPage />;
}
