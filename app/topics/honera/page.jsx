import HoneraKeywordPage, { generateMetadata } from './honera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraKeywordPage />;
}
