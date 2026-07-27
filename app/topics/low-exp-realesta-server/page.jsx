import LowExpRealestaServerKeywordPage, { generateMetadata } from './low-exp-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRealestaServerKeywordPage />;
}
