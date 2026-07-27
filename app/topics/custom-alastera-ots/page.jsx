import CustomAlasteraOtsKeywordPage, { generateMetadata } from './custom-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraOtsKeywordPage />;
}
