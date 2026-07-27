import HighrateXanteriaServerKeywordPage, { generateMetadata } from './highrate-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaServerKeywordPage />;
}
