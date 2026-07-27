import NewArchlightRegisterKeywordPage, { generateMetadata } from './new-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightRegisterKeywordPage />;
}
