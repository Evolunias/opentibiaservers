import HighrateThorniaKeywordPage, { generateMetadata } from './highrate-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaKeywordPage />;
}
