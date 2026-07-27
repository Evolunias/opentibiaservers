import OfficialArchlightOtKeywordPage, { generateMetadata } from './official-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightOtKeywordPage />;
}
