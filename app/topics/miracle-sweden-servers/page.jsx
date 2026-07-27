import MiracleSwedenServersKeywordPage, { generateMetadata } from './miracle-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleSwedenServersKeywordPage />;
}
