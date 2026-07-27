import PremiaServerKeywordPage, { generateMetadata } from './premia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaServerKeywordPage />;
}
