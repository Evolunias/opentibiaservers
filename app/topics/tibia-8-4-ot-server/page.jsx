import Tibia84OtServerKeywordPage, { generateMetadata } from './tibia-8-4-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OtServerKeywordPage />;
}
