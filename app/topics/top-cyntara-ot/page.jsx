import TopCyntaraOtKeywordPage, { generateMetadata } from './top-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraOtKeywordPage />;
}
