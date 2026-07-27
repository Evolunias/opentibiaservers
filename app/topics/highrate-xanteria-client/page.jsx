import HighrateXanteriaClientKeywordPage, { generateMetadata } from './highrate-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaClientKeywordPage />;
}
