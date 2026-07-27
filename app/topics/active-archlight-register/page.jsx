import ActiveArchlightRegisterKeywordPage, { generateMetadata } from './active-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightRegisterKeywordPage />;
}
