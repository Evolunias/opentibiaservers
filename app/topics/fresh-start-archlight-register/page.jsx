import FreshStartArchlightRegisterKeywordPage, { generateMetadata } from './fresh-start-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightRegisterKeywordPage />;
}
