import NepreniaChileServerKeywordPage, { generateMetadata } from './neprenia-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaChileServerKeywordPage />;
}
