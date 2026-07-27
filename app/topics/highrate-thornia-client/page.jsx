import HighrateThorniaClientKeywordPage, { generateMetadata } from './highrate-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaClientKeywordPage />;
}
