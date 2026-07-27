import Tibia11OtServerKeywordPage, { generateMetadata } from './tibia-11-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OtServerKeywordPage />;
}
