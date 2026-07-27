import PopularCyntaraKeywordPage, { generateMetadata } from './popular-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraKeywordPage />;
}
