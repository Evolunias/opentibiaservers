import LowrateYurotsServerKeywordPage, { generateMetadata } from './lowrate-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsServerKeywordPage />;
}
