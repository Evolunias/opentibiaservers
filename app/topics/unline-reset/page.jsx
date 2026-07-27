import UnlineResetKeywordPage, { generateMetadata } from './unline-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineResetKeywordPage />;
}
