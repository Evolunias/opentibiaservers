import HighrateUnlinePrivateServerKeywordPage, { generateMetadata } from './highrate-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlinePrivateServerKeywordPage />;
}
