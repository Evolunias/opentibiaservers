import CustomSaintsotServerKeywordPage, { generateMetadata } from './custom-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotServerKeywordPage />;
}
