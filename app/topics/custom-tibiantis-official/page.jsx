import CustomTibiantisOfficialKeywordPage, { generateMetadata } from './custom-tibiantis-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisOfficialKeywordPage />;
}
