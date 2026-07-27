import ActiveShadowcoresOfficialKeywordPage, { generateMetadata } from './active-shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresOfficialKeywordPage />;
}
