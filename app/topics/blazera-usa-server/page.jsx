import BlazeraUsaServerKeywordPage, { generateMetadata } from './blazera-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraUsaServerKeywordPage />;
}
