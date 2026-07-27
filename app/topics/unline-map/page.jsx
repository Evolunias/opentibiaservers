import UnlineMapKeywordPage, { generateMetadata } from './unline-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineMapKeywordPage />;
}
