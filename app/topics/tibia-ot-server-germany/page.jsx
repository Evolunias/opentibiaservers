import TibiaOtServerGermanyKeywordPage, { generateMetadata } from './tibia-ot-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerGermanyKeywordPage />;
}
