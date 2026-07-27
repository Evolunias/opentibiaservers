import NoResetEvoleraServerKeywordPage, { generateMetadata } from './no-reset-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoleraServerKeywordPage />;
}
