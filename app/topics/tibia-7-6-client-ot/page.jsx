import Tibia76ClientOtKeywordPage, { generateMetadata } from './tibia-7-6-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76ClientOtKeywordPage />;
}
