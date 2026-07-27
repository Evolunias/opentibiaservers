import TibiaOtServerArgentinaKeywordPage, { generateMetadata } from './tibia-ot-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerArgentinaKeywordPage />;
}
