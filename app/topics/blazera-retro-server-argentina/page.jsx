import BlazeraRetroServerArgentinaKeywordPage, { generateMetadata } from './blazera-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRetroServerArgentinaKeywordPage />;
}
