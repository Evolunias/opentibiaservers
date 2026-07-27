import CustomEvoleraOtServerKeywordPage, { generateMetadata } from './custom-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraOtServerKeywordPage />;
}
