import UnlineBaiakServerCanadaKeywordPage, { generateMetadata } from './unline-baiak-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineBaiakServerCanadaKeywordPage />;
}
