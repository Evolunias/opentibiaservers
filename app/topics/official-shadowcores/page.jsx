import OfficialShadowcoresKeywordPage, { generateMetadata } from './official-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresKeywordPage />;
}
