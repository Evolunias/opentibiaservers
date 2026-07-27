import HighExpServersUkKeywordPage, { generateMetadata } from './high-exp-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersUkKeywordPage />;
}
