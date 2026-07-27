import HighrateXanteriaOtKeywordPage, { generateMetadata } from './highrate-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaOtKeywordPage />;
}
