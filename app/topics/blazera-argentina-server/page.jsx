import BlazeraArgentinaServerKeywordPage, { generateMetadata } from './blazera-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraArgentinaServerKeywordPage />;
}
