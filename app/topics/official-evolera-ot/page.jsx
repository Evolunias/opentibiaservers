import OfficialEvoleraOtKeywordPage, { generateMetadata } from './official-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraOtKeywordPage />;
}
