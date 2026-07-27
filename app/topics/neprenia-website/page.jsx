import NepreniaWebsiteKeywordPage, { generateMetadata } from './neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaWebsiteKeywordPage />;
}
