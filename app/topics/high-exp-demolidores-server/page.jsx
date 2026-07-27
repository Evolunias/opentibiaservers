import HighExpDemolidoresServerKeywordPage, { generateMetadata } from './high-exp-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDemolidoresServerKeywordPage />;
}
