import CustomSaintsotOtServerKeywordPage, { generateMetadata } from './custom-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotOtServerKeywordPage />;
}
