import CustomEvoleraOfficialKeywordPage, { generateMetadata } from './custom-evolera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraOfficialKeywordPage />;
}
