import CurrentShadowcoresCreateAccountKeywordPage, { generateMetadata } from './current-shadowcores-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresCreateAccountKeywordPage />;
}
