import ElderaBaiakServerCanadaKeywordPage, { generateMetadata } from './eldera-baiak-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaBaiakServerCanadaKeywordPage />;
}
