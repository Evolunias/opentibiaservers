import NoResetMidhemKeywordPage, { generateMetadata } from './no-reset-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemKeywordPage />;
}
