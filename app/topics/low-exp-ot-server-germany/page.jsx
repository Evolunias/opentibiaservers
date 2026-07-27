import LowExpOtServerGermanyKeywordPage, { generateMetadata } from './low-exp-ot-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerGermanyKeywordPage />;
}
