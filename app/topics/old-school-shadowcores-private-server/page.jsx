import OldSchoolShadowcoresPrivateServerKeywordPage, { generateMetadata } from './old-school-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresPrivateServerKeywordPage />;
}
