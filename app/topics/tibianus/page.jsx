import TibianusKeywordPage, { generateMetadata } from './tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusKeywordPage />;
}
