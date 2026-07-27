import CurrentArchlightRegisterKeywordPage, { generateMetadata } from './current-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightRegisterKeywordPage />;
}
