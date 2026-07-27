import BlazeraHighExpKeywordPage, { generateMetadata } from './blazera-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraHighExpKeywordPage />;
}
