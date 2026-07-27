import NepreniaLatinAmericaServerKeywordPage, { generateMetadata } from './neprenia-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaLatinAmericaServerKeywordPage />;
}
