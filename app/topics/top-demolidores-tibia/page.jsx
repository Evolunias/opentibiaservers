import TopDemolidoresTibiaKeywordPage, { generateMetadata } from './top-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresTibiaKeywordPage />;
}
