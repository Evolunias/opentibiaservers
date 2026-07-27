import Tibia1098OtServerKeywordPage, { generateMetadata } from './tibia-10-98-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098OtServerKeywordPage />;
}
