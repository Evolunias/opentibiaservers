import UnlineBaiakServerPolandKeywordPage, { generateMetadata } from './unline-baiak-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineBaiakServerPolandKeywordPage />;
}
