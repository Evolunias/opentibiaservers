import HighrateXanteriaOtsKeywordPage, { generateMetadata } from './highrate-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaOtsKeywordPage />;
}
