import OtServerListListKeywordPage, { generateMetadata } from './ot-server-list-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListListKeywordPage />;
}
