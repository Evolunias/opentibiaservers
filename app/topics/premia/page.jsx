import PremiaKeywordPage, { generateMetadata } from './premia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaKeywordPage />;
}
