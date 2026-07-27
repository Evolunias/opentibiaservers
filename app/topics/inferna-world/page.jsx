import InfernaWorldKeywordPage, { generateMetadata } from './inferna-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaWorldKeywordPage />;
}
