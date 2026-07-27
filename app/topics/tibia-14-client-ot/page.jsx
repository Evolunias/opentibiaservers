import Tibia14ClientOtKeywordPage, { generateMetadata } from './tibia-14-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14ClientOtKeywordPage />;
}
