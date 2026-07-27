import OtServerListHighExpKeywordPage, { generateMetadata } from './ot-server-list-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListHighExpKeywordPage />;
}
