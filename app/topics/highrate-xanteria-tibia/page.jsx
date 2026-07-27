import HighrateXanteriaTibiaKeywordPage, { generateMetadata } from './highrate-xanteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaTibiaKeywordPage />;
}
