import HighrateClassicusPrivateServerKeywordPage, { generateMetadata } from './highrate-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusPrivateServerKeywordPage />;
}
