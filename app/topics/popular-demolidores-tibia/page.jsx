import PopularDemolidoresTibiaKeywordPage, { generateMetadata } from './popular-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresTibiaKeywordPage />;
}
