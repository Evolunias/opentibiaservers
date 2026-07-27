import OtServersArgentinaKeywordPage, { generateMetadata } from './ot-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersArgentinaKeywordPage />;
}
