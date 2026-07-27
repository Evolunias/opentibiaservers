import BlazeraPvpeKeywordPage, { generateMetadata } from './blazera-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPvpeKeywordPage />;
}
