import ActiveArchlightOtKeywordPage, { generateMetadata } from './active-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightOtKeywordPage />;
}
