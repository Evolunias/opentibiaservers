import PopularCyntaraOtServerKeywordPage, { generateMetadata } from './popular-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraOtServerKeywordPage />;
}
