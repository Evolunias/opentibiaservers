import BlazeraUkServerKeywordPage, { generateMetadata } from './blazera-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraUkServerKeywordPage />;
}
