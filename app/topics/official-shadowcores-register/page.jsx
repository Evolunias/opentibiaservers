import OfficialShadowcoresRegisterKeywordPage, { generateMetadata } from './official-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresRegisterKeywordPage />;
}
