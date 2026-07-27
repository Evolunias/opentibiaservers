import RealestaHighExpKeywordPage, { generateMetadata } from './realesta-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaHighExpKeywordPage />;
}
