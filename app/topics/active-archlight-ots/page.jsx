import ActiveArchlightOtsKeywordPage, { generateMetadata } from './active-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightOtsKeywordPage />;
}
