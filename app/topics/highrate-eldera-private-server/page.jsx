import HighrateElderaPrivateServerKeywordPage, { generateMetadata } from './highrate-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaPrivateServerKeywordPage />;
}
