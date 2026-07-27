import NoResetEvoleraClientKeywordPage, { generateMetadata } from './no-reset-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoleraClientKeywordPage />;
}
