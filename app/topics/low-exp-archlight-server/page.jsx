import LowExpArchlightServerKeywordPage, { generateMetadata } from './low-exp-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpArchlightServerKeywordPage />;
}
