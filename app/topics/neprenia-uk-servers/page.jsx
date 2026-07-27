import NepreniaUkServersKeywordPage, { generateMetadata } from './neprenia-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaUkServersKeywordPage />;
}
