import MiracleSwedenServerKeywordPage, { generateMetadata } from './miracle-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleSwedenServerKeywordPage />;
}
