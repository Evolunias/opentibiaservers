import UnlineOtsKeywordPage, { generateMetadata } from './unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineOtsKeywordPage />;
}
