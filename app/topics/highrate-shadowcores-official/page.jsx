import HighrateShadowcoresOfficialKeywordPage, { generateMetadata } from './highrate-shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresOfficialKeywordPage />;
}
