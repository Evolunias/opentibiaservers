import NepreniaUkServerKeywordPage, { generateMetadata } from './neprenia-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaUkServerKeywordPage />;
}
