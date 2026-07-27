import PopularCyntaraClientKeywordPage, { generateMetadata } from './popular-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraClientKeywordPage />;
}
