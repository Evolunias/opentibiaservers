import NepreniaPolandServersKeywordPage, { generateMetadata } from './neprenia-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPolandServersKeywordPage />;
}
