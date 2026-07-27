import LowrateUnlinePrivateServerKeywordPage, { generateMetadata } from './lowrate-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlinePrivateServerKeywordPage />;
}
