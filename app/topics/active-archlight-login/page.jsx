import ActiveArchlightLoginKeywordPage, { generateMetadata } from './active-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightLoginKeywordPage />;
}
