import HighExpOtServerSwedenKeywordPage, { generateMetadata } from './high-exp-ot-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpOtServerSwedenKeywordPage />;
}
