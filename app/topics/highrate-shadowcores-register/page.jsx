import HighrateShadowcoresRegisterKeywordPage, { generateMetadata } from './highrate-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresRegisterKeywordPage />;
}
