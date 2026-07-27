import HighrateTibijkaOtKeywordPage, { generateMetadata } from './highrate-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaOtKeywordPage />;
}
