import ShadowcoresOfficialKeywordPage, { generateMetadata } from './shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresOfficialKeywordPage />;
}
