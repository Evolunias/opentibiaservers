import TibiaOtServerMexicoKeywordPage, { generateMetadata } from './tibia-ot-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerMexicoKeywordPage />;
}
