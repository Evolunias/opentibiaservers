import NoResetUnlineServerKeywordPage, { generateMetadata } from './no-reset-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineServerKeywordPage />;
}
