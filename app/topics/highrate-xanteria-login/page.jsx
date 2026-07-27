import HighrateXanteriaLoginKeywordPage, { generateMetadata } from './highrate-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaLoginKeywordPage />;
}
