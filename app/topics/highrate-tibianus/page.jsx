import HighrateTibianusKeywordPage, { generateMetadata } from './highrate-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusKeywordPage />;
}
