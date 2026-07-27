import NoResetEvoleraKeywordPage, { generateMetadata } from './no-reset-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoleraKeywordPage />;
}
