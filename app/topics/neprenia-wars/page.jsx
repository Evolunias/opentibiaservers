import NepreniaWarsKeywordPage, { generateMetadata } from './neprenia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaWarsKeywordPage />;
}
