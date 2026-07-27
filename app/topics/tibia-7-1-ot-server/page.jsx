import Tibia71OtServerKeywordPage, { generateMetadata } from './tibia-7-1-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OtServerKeywordPage />;
}
