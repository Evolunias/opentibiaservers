import CustomShadowcoresOfficialKeywordPage, { generateMetadata } from './custom-shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresOfficialKeywordPage />;
}
