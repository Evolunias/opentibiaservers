import OtServerListActiveKeywordPage, { generateMetadata } from './ot-server-list-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListActiveKeywordPage />;
}
