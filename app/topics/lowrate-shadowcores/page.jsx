import LowrateShadowcoresKeywordPage, { generateMetadata } from './lowrate-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresKeywordPage />;
}
