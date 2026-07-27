import LowExpOxygenotServerKeywordPage, { generateMetadata } from './low-exp-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOxygenotServerKeywordPage />;
}
