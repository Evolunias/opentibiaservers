import CustomShadowcoresClientKeywordPage, { generateMetadata } from './custom-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresClientKeywordPage />;
}
