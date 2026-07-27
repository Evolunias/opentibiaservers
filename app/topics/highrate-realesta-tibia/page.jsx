import HighrateRealestaTibiaKeywordPage, { generateMetadata } from './highrate-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaTibiaKeywordPage />;
}
