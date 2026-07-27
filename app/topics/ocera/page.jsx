import OceraKeywordPage, { generateMetadata } from './ocera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraKeywordPage />;
}
