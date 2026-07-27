import LowExpAmeriaServerKeywordPage, { generateMetadata } from './low-exp-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpAmeriaServerKeywordPage />;
}
