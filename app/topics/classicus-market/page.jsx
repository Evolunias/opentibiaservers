import ClassicusMarketKeywordPage, { generateMetadata } from './classicus-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusMarketKeywordPage />;
}
