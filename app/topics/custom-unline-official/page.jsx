import CustomUnlineOfficialKeywordPage, { generateMetadata } from './custom-unline-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineOfficialKeywordPage />;
}
