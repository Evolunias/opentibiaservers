import TopArchlightRegisterKeywordPage, { generateMetadata } from './top-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightRegisterKeywordPage />;
}
