import HighrateThorniaTibiaKeywordPage, { generateMetadata } from './highrate-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaTibiaKeywordPage />;
}
