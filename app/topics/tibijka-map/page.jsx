import TibijkaMapKeywordPage, { generateMetadata } from './tibijka-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaMapKeywordPage />;
}
