import OfficialImperianicOtServerKeywordPage, { generateMetadata } from './official-imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicOtServerKeywordPage />;
}
