import HighrateShadowcoresKeywordPage, { generateMetadata } from './highrate-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresKeywordPage />;
}
