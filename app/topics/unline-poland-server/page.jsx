import UnlinePolandServerKeywordPage, { generateMetadata } from './unline-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlinePolandServerKeywordPage />;
}
