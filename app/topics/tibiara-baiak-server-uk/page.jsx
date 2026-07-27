import TibiaraBaiakServerUkKeywordPage, { generateMetadata } from './tibiara-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraBaiakServerUkKeywordPage />;
}
