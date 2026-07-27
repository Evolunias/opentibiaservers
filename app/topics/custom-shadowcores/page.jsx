import CustomShadowcoresKeywordPage, { generateMetadata } from './custom-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresKeywordPage />;
}
