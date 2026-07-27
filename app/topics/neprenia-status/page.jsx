import NepreniaStatusKeywordPage, { generateMetadata } from './neprenia-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaStatusKeywordPage />;
}
