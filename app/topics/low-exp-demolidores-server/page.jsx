import LowExpDemolidoresServerKeywordPage, { generateMetadata } from './low-exp-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDemolidoresServerKeywordPage />;
}
