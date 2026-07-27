import UnlineArgentinaServerKeywordPage, { generateMetadata } from './unline-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineArgentinaServerKeywordPage />;
}
