import Tibia13OtServerKeywordPage, { generateMetadata } from './tibia-13-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OtServerKeywordPage />;
}
