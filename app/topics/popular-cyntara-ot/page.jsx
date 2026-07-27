import PopularCyntaraOtKeywordPage, { generateMetadata } from './popular-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraOtKeywordPage />;
}
