import TopElderaGuideKeywordPage, { generateMetadata } from './top-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaGuideKeywordPage />;
}
