import BlazeraResetKeywordPage, { generateMetadata } from './blazera-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraResetKeywordPage />;
}
