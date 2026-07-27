import HighrateTibijkaKeywordPage, { generateMetadata } from './highrate-tibijka';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaKeywordPage />;
}
