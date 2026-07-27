import CustomEvoleraClientKeywordPage, { generateMetadata } from './custom-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraClientKeywordPage />;
}
