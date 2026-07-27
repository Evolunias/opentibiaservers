import TibijkaKeywordPage, { generateMetadata } from './tibijka';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaKeywordPage />;
}
