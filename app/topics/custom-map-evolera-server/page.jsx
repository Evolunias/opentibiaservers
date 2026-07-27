import CustomMapEvoleraServerKeywordPage, { generateMetadata } from './custom-map-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapEvoleraServerKeywordPage />;
}
