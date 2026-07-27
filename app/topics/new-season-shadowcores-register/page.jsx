import NewSeasonShadowcoresRegisterKeywordPage, { generateMetadata } from './new-season-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresRegisterKeywordPage />;
}
