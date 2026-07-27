import HighExpOxygenotServerKeywordPage, { generateMetadata } from './high-exp-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpOxygenotServerKeywordPage />;
}
