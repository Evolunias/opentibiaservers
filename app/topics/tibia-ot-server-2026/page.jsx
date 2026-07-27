import TibiaOtServer2026KeywordPage, { generateMetadata } from './tibia-ot-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServer2026KeywordPage />;
}
