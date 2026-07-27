import NoResetShadowcoresWebsiteKeywordPage, { generateMetadata } from './no-reset-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresWebsiteKeywordPage />;
}
