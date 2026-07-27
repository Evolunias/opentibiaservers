import CustomEvoleraOtKeywordPage, { generateMetadata } from './custom-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraOtKeywordPage />;
}
