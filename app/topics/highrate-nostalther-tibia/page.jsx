import HighrateNostaltherTibiaKeywordPage, { generateMetadata } from './highrate-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherTibiaKeywordPage />;
}
