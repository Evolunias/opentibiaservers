import HighrateXanteriaOtServerKeywordPage, { generateMetadata } from './highrate-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaOtServerKeywordPage />;
}
