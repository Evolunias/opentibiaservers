import UnlineServerKeywordPage, { generateMetadata } from './unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineServerKeywordPage />;
}
