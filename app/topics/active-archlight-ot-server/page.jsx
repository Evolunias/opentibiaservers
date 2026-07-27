import ActiveArchlightOtServerKeywordPage, { generateMetadata } from './active-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightOtServerKeywordPage />;
}
