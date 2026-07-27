import Tibia14OtServerKeywordPage, { generateMetadata } from './tibia-14-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OtServerKeywordPage />;
}
