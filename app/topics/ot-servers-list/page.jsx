import OtServersListKeywordPage, { generateMetadata } from './ot-servers-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersListKeywordPage />;
}
