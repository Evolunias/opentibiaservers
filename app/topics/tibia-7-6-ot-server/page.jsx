import Tibia76OtServerKeywordPage, { generateMetadata } from './tibia-7-6-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76OtServerKeywordPage />;
}
