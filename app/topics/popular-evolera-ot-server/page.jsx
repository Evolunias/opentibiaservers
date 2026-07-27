import PopularEvoleraOtServerKeywordPage, { generateMetadata } from './popular-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraOtServerKeywordPage />;
}
