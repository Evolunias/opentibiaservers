import NepreniaUsaServersKeywordPage, { generateMetadata } from './neprenia-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaUsaServersKeywordPage />;
}
