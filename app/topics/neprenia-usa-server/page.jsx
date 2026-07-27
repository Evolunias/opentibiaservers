import NepreniaUsaServerKeywordPage, { generateMetadata } from './neprenia-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaUsaServerKeywordPage />;
}
