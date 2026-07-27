import OtServerListEuropeKeywordPage, { generateMetadata } from './ot-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListEuropeKeywordPage />;
}
