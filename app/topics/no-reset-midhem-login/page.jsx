import NoResetMidhemLoginKeywordPage, { generateMetadata } from './no-reset-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemLoginKeywordPage />;
}
