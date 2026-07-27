import NoResetMidhemClientKeywordPage, { generateMetadata } from './no-reset-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemClientKeywordPage />;
}
