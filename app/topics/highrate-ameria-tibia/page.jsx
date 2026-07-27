import HighrateAmeriaTibiaKeywordPage, { generateMetadata } from './highrate-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaTibiaKeywordPage />;
}
