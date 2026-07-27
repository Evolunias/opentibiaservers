import NeranaKeywordPage, { generateMetadata } from './nerana';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaKeywordPage />;
}
