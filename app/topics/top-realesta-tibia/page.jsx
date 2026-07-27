import TopRealestaTibiaKeywordPage, { generateMetadata } from './top-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaTibiaKeywordPage />;
}
