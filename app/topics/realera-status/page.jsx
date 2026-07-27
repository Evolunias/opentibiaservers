import RealeraStatusKeywordPage, { generateMetadata } from './realera-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraStatusKeywordPage />;
}
