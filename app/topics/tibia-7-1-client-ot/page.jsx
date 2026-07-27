import Tibia71ClientOtKeywordPage, { generateMetadata } from './tibia-7-1-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71ClientOtKeywordPage />;
}
