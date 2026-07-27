import NoResetUnlineClientKeywordPage, { generateMetadata } from './no-reset-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineClientKeywordPage />;
}
