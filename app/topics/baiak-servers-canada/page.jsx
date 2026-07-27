import BaiakServersCanadaKeywordPage, { generateMetadata } from './baiak-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersCanadaKeywordPage />;
}
