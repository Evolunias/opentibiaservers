import CustomUnlineOtKeywordPage, { generateMetadata } from './custom-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineOtKeywordPage />;
}
