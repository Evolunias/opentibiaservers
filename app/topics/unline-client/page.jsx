import UnlineClientKeywordPage, { generateMetadata } from './unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineClientKeywordPage />;
}
