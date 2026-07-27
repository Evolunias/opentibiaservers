import BaiakServersUkKeywordPage, { generateMetadata } from './baiak-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersUkKeywordPage />;
}
