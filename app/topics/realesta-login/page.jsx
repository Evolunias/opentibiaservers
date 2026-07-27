import RealestaLoginKeywordPage, { generateMetadata } from './realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaLoginKeywordPage />;
}
