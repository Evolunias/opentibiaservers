import PopularCyntaraOtsKeywordPage, { generateMetadata } from './popular-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraOtsKeywordPage />;
}
