import CustomImperianicOfficialKeywordPage, { generateMetadata } from './custom-imperianic-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicOfficialKeywordPage />;
}
