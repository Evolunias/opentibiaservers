import TibiaOtServerBrazilKeywordPage, { generateMetadata } from './tibia-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerBrazilKeywordPage />;
}
