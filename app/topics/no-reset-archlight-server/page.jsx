import NoResetArchlightServerKeywordPage, { generateMetadata } from './no-reset-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightServerKeywordPage />;
}
