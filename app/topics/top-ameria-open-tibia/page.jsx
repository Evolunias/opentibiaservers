import TopAmeriaOpenTibiaKeywordPage, { generateMetadata } from './top-ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaOpenTibiaKeywordPage />;
}
