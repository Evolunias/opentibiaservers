import CustomAlasteraOfficialKeywordPage, { generateMetadata } from './custom-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraOfficialKeywordPage />;
}
