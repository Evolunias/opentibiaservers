import LowrateYurotsPrivateServerKeywordPage, { generateMetadata } from './lowrate-yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsPrivateServerKeywordPage />;
}
