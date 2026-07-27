import LowExpServersGermanyKeywordPage, { generateMetadata } from './low-exp-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersGermanyKeywordPage />;
}
