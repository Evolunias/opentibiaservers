import BlazeraOtKeywordPage, { generateMetadata } from './blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraOtKeywordPage />;
}
