import CurrentArchlightServerKeywordPage, { generateMetadata } from './current-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightServerKeywordPage />;
}
