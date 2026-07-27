import PopularDemolidoresClientKeywordPage, { generateMetadata } from './popular-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresClientKeywordPage />;
}
