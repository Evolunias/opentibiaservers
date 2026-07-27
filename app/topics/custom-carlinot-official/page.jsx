import CustomCarlinotOfficialKeywordPage, { generateMetadata } from './custom-carlinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotOfficialKeywordPage />;
}
