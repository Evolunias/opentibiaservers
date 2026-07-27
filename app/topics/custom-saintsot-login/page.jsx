import CustomSaintsotLoginKeywordPage, { generateMetadata } from './custom-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotLoginKeywordPage />;
}
