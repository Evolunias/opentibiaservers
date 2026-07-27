import LowExpElderaServerKeywordPage, { generateMetadata } from './low-exp-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpElderaServerKeywordPage />;
}
