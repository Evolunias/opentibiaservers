import HighrateXanteriaOpenTibiaKeywordPage, { generateMetadata } from './highrate-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaOpenTibiaKeywordPage />;
}
