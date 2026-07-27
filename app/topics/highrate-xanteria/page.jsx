import HighrateXanteriaKeywordPage, { generateMetadata } from './highrate-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaKeywordPage />;
}
