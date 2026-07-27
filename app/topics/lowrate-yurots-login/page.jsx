import LowrateYurotsLoginKeywordPage, { generateMetadata } from './lowrate-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsLoginKeywordPage />;
}
