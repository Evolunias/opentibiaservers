import CurrentXanteriaOpenTibiaKeywordPage, { generateMetadata } from './current-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaOpenTibiaKeywordPage />;
}
