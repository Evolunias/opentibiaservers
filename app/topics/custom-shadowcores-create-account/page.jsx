import CustomShadowcoresCreateAccountKeywordPage, { generateMetadata } from './custom-shadowcores-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresCreateAccountKeywordPage />;
}
