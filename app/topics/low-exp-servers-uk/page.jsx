import LowExpServersUkKeywordPage, { generateMetadata } from './low-exp-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersUkKeywordPage />;
}
