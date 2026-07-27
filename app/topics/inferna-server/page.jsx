import InfernaServerKeywordPage, { generateMetadata } from './inferna-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaServerKeywordPage />;
}
