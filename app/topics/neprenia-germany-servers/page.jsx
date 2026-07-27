import NepreniaGermanyServersKeywordPage, { generateMetadata } from './neprenia-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaGermanyServersKeywordPage />;
}
