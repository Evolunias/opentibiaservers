import Tibia100OtServerKeywordPage, { generateMetadata } from './tibia-10-0-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100OtServerKeywordPage />;
}
