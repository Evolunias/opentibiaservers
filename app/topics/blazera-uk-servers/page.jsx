import BlazeraUkServersKeywordPage, { generateMetadata } from './blazera-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraUkServersKeywordPage />;
}
