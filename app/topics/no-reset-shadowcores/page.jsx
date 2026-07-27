import NoResetShadowcoresKeywordPage, { generateMetadata } from './no-reset-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresKeywordPage />;
}
