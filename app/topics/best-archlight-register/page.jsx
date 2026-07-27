import BestArchlightRegisterKeywordPage, { generateMetadata } from './best-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightRegisterKeywordPage />;
}
