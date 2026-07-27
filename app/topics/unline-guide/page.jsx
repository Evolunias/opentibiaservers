import UnlineGuideKeywordPage, { generateMetadata } from './unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineGuideKeywordPage />;
}
