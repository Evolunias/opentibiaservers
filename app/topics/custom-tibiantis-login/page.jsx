import CustomTibiantisLoginKeywordPage, { generateMetadata } from './custom-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisLoginKeywordPage />;
}
