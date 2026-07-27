import CustomSaintsotClientKeywordPage, { generateMetadata } from './custom-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotClientKeywordPage />;
}
