import BlazeraGermanyServerKeywordPage, { generateMetadata } from './blazera-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraGermanyServerKeywordPage />;
}
