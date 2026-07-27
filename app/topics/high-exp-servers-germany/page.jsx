import HighExpServersGermanyKeywordPage, { generateMetadata } from './high-exp-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersGermanyKeywordPage />;
}
