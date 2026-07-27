import NepreniaArgentinaServersKeywordPage, { generateMetadata } from './neprenia-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaArgentinaServersKeywordPage />;
}
