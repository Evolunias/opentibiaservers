import PopularDemolidoresOtServerKeywordPage, { generateMetadata } from './popular-demolidores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresOtServerKeywordPage />;
}
