import CustomThaisotOfficialKeywordPage, { generateMetadata } from './custom-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotOfficialKeywordPage />;
}
