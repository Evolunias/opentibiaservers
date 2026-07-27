import BlazeraServerKeywordPage, { generateMetadata } from './blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraServerKeywordPage />;
}
