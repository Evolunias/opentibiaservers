import RealestaStatusKeywordPage, { generateMetadata } from './realesta-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaStatusKeywordPage />;
}
