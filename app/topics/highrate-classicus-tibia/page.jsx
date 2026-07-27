import HighrateClassicusTibiaKeywordPage, { generateMetadata } from './highrate-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusTibiaKeywordPage />;
}
