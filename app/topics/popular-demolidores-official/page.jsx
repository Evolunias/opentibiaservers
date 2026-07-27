import PopularDemolidoresOfficialKeywordPage, { generateMetadata } from './popular-demolidores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresOfficialKeywordPage />;
}
