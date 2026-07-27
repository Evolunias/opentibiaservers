import TibiaraOtServerKeywordPage, { generateMetadata } from './tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraOtServerKeywordPage />;
}
