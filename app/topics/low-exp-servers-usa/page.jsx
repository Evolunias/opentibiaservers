import LowExpServersUsaKeywordPage, { generateMetadata } from './low-exp-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersUsaKeywordPage />;
}
