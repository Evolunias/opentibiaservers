import BlazeraArgentinaServersKeywordPage, { generateMetadata } from './blazera-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraArgentinaServersKeywordPage />;
}
