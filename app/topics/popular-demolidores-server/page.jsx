import PopularDemolidoresServerKeywordPage, { generateMetadata } from './popular-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresServerKeywordPage />;
}
