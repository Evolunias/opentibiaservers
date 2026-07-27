import UnlineHighExpKeywordPage, { generateMetadata } from './unline-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineHighExpKeywordPage />;
}
