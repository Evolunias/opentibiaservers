import CurrentShadowcoresRegisterKeywordPage, { generateMetadata } from './current-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresRegisterKeywordPage />;
}
