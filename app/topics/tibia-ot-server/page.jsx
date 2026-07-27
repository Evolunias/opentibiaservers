import TibiaOtServerKeywordPage, { generateMetadata } from './tibia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerKeywordPage />;
}
