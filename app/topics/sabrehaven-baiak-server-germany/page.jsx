import SabrehavenBaiakServerGermanyKeywordPage, { generateMetadata } from './sabrehaven-baiak-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenBaiakServerGermanyKeywordPage />;
}
