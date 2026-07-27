import NoResetArchlightRegisterKeywordPage, { generateMetadata } from './no-reset-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightRegisterKeywordPage />;
}
