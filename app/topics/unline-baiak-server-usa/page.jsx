import UnlineBaiakServerUsaKeywordPage, { generateMetadata } from './unline-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineBaiakServerUsaKeywordPage />;
}
