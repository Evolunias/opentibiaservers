import LowrateArchlightRegisterKeywordPage, { generateMetadata } from './lowrate-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightRegisterKeywordPage />;
}
