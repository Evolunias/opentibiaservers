import OtServerListGermanyKeywordPage, { generateMetadata } from './ot-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListGermanyKeywordPage />;
}
