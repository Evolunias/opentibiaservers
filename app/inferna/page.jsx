import InfernaPage, { generateMetadata } from './inferna';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaPage />;
}
