import OtServerListRegisterKeywordPage, { generateMetadata } from './ot-server-list-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListRegisterKeywordPage />;
}
