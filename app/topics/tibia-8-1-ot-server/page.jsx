import Tibia81OtServerKeywordPage, { generateMetadata } from './tibia-8-1-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OtServerKeywordPage />;
}
