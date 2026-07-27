import BlazeraOtsKeywordPage, { generateMetadata } from './blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraOtsKeywordPage />;
}
