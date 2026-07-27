import LumineraBaiakServerCanadaKeywordPage, { generateMetadata } from './luminera-baiak-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraBaiakServerCanadaKeywordPage />;
}
