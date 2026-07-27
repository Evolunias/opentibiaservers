import OtServerListClientKeywordPage, { generateMetadata } from './ot-server-list-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListClientKeywordPage />;
}
