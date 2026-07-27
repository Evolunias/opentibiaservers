import TibiaOtServerListKeywordPage, { generateMetadata } from './tibia-ot-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerListKeywordPage />;
}
