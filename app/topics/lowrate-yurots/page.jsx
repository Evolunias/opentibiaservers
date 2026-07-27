import LowrateYurotsKeywordPage, { generateMetadata } from './lowrate-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsKeywordPage />;
}
