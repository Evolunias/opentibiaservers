import Tibia772ClientOtKeywordPage, { generateMetadata } from './tibia-7-72-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772ClientOtKeywordPage />;
}
