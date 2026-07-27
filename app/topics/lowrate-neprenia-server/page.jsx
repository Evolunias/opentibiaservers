import LowrateNepreniaServerKeywordPage, { generateMetadata } from './lowrate-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaServerKeywordPage />;
}
