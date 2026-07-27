import OceraServerKeywordPage, { generateMetadata } from './ocera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraServerKeywordPage />;
}
