import LowrateElderaServerKeywordPage, { generateMetadata } from './lowrate-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaServerKeywordPage />;
}
