import CustomTibianusOtsKeywordPage, { generateMetadata } from './custom-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusOtsKeywordPage />;
}
