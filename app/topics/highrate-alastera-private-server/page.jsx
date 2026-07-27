import HighrateAlasteraPrivateServerKeywordPage, { generateMetadata } from './highrate-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraPrivateServerKeywordPage />;
}
