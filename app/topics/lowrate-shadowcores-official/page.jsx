import LowrateShadowcoresOfficialKeywordPage, { generateMetadata } from './lowrate-shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresOfficialKeywordPage />;
}
