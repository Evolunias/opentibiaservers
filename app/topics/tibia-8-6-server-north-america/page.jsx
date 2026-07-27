import Tibia86ServerNorthAmericaKeywordPage, { generateMetadata } from './tibia-8-6-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerNorthAmericaKeywordPage />;
}
