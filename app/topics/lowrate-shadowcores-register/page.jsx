import LowrateShadowcoresRegisterKeywordPage, { generateMetadata } from './lowrate-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresRegisterKeywordPage />;
}
