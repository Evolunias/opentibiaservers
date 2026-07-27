import Tibia86ServerCanadaKeywordPage, { generateMetadata } from './tibia-8-6-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerCanadaKeywordPage />;
}
