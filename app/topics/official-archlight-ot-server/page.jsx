import OfficialArchlightOtServerKeywordPage, { generateMetadata } from './official-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightOtServerKeywordPage />;
}
