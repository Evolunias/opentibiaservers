import CustomShadowcoresRegisterKeywordPage, { generateMetadata } from './custom-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresRegisterKeywordPage />;
}
