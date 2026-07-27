import HighrateThorniaServerKeywordPage, { generateMetadata } from './highrate-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaServerKeywordPage />;
}
