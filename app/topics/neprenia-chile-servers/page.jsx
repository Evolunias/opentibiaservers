import NepreniaChileServersKeywordPage, { generateMetadata } from './neprenia-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaChileServersKeywordPage />;
}
