import BlazeraLatinAmericaServerKeywordPage, { generateMetadata } from './blazera-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraLatinAmericaServerKeywordPage />;
}
