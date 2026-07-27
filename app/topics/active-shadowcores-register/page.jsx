import ActiveShadowcoresRegisterKeywordPage, { generateMetadata } from './active-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresRegisterKeywordPage />;
}
