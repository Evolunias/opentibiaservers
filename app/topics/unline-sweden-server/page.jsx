import UnlineSwedenServerKeywordPage, { generateMetadata } from './unline-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineSwedenServerKeywordPage />;
}
