import CustomShadowcoresWebsiteKeywordPage, { generateMetadata } from './custom-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresWebsiteKeywordPage />;
}
