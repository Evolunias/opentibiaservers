import CustomClassicusOfficialKeywordPage, { generateMetadata } from './custom-classicus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusOfficialKeywordPage />;
}
