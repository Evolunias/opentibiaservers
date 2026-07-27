import BlazeraUsaServersKeywordPage, { generateMetadata } from './blazera-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraUsaServersKeywordPage />;
}
