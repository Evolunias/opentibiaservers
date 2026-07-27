import NewShadowcoresKeywordPage, { generateMetadata } from './new-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresKeywordPage />;
}
