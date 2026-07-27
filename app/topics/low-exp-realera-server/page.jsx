import LowExpRealeraServerKeywordPage, { generateMetadata } from './low-exp-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRealeraServerKeywordPage />;
}
