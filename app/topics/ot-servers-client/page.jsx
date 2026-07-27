import OtServersClientKeywordPage, { generateMetadata } from './ot-servers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersClientKeywordPage />;
}
