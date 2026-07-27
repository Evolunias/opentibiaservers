import BaiakZuneraOtServerKeywordPage, { generateMetadata } from './baiak-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakZuneraOtServerKeywordPage />;
}
