import OfficialOlderaOtServerKeywordPage, { generateMetadata } from './official-oldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaOtServerKeywordPage />;
}
