import CustomEvoleraServerKeywordPage, { generateMetadata } from './custom-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraServerKeywordPage />;
}
