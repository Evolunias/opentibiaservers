import HighExpArchlightServerKeywordPage, { generateMetadata } from './high-exp-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpArchlightServerKeywordPage />;
}
