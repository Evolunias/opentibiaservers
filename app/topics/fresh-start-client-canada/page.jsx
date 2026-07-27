import FreshStartClientCanadaKeywordPage, { generateMetadata } from './fresh-start-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClientCanadaKeywordPage />;
}
