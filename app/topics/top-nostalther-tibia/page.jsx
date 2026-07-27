import TopNostaltherTibiaKeywordPage, { generateMetadata } from './top-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherTibiaKeywordPage />;
}
