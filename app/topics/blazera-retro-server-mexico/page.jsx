import BlazeraRetroServerMexicoKeywordPage, { generateMetadata } from './blazera-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRetroServerMexicoKeywordPage />;
}
