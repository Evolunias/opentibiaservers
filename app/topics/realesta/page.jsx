import RealestaKeywordPage, { generateMetadata } from './realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaKeywordPage />;
}
