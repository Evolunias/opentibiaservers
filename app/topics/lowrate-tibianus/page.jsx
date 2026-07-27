import LowrateTibianusKeywordPage, { generateMetadata } from './lowrate-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusKeywordPage />;
}
