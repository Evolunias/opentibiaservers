import CurrentXanteriaKeywordPage, { generateMetadata } from './current-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaKeywordPage />;
}
