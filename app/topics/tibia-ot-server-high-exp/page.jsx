import TibiaOtServerHighExpKeywordPage, { generateMetadata } from './tibia-ot-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerHighExpKeywordPage />;
}
