import ActiveArchlightServerKeywordPage, { generateMetadata } from './active-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightServerKeywordPage />;
}
