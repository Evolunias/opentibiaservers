import NoResetUnlineLoginKeywordPage, { generateMetadata } from './no-reset-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineLoginKeywordPage />;
}
