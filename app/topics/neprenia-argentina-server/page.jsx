import NepreniaArgentinaServerKeywordPage, { generateMetadata } from './neprenia-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaArgentinaServerKeywordPage />;
}
