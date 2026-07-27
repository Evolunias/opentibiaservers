import PopularDemolidoresKeywordPage, { generateMetadata } from './popular-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresKeywordPage />;
}
