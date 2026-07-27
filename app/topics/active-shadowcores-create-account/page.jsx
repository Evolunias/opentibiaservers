import ActiveShadowcoresCreateAccountKeywordPage, { generateMetadata } from './active-shadowcores-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresCreateAccountKeywordPage />;
}
